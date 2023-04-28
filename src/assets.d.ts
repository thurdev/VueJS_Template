declare module '*.vue' {
  export default Vue;
}

declare module '*.svg?inline' {
  const content: VueConstructor<Vue>;
  export default content;
}

declare module 'vue-directive-long-press' {
  const content: VueConstructor<Vue>;
  export default content;
}
declare module '*.svg' {
  const content: VueConstructor<Vue>;
  export default content;
}

declare module 'vue-toast-notification' {
  const content: VueConstructor<Vue>;
  export default content;
}

declare module 'vue-cool-lightbox' {
  const content: VueConstructor<Vue>;
  export default content;
}
