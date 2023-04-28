import router from '.src/routes/router';
import store from './src/store';
import translations from './src/plugins/translations.json';

type refs = {
  scrollToBottom: () => void;
};

declare module 'vue/types/vue' {
  interface Vue {
    $store: typeof store;
    $router: typeof router;
    $translations: typeof translations;
    $session: {
      setSession: (tokenName: string, value: unknown, persistent?: boolean) => void;
      getSession: (tokenName: string) => string;
    };
    $me: typeof store.state.user;
    $cookies: {
      get: (name: string) => string;
      set: (name: string, value: string, days?: number) => void;
      remove: (name: string) => void;
    };
    $token: string;
    $xtoken: string;
    $http: {
      get: (url: string, config?: Record<string, unknown>) => Promise<Record<string, unknown>>;
      post: (
        url: string,
        data?: Record<string, unknown>,
        config?: Record<string, unknown>
      ) => Promise<Record<string, unknown>>;
      put: (
        url: string,
        data?: Record<string, unknown>,
        config?: Record<string, unknown>
      ) => Promise<Record<string, unknown>>;
      delete: (url: string, config?: Record<string, unknown>) => Promise<Record<string, unknown>>;
      defaults: {
        headers: {
          common: {
            'X-Authorization'?: string;
            Authorization?: string;
          };
        };
      };
    };
  }
}
declare global {
  interface Window {
    socket: SocketIOClient.Socket;
  }
}
