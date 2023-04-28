import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options';
import { ExtendedVue, VueConstructor } from 'vue/types/vue';
import { ViewPort } from './_enums/global';

type VueComponent<ADDONS, DATA, METHODS, COMPUTED, PROPS> = Omit<VueConstructor, 'extend'> & {
  extend(
    options?: ThisTypedComponentOptionsWithRecordProps<Vue & ADDONS, DATA, METHODS, COMPUTED, PROPS>
  ): ExtendedVue<Vue, DATA, METHODS, COMPUTED, PROPS>;
};

type Component<ADDONS, DATA, METHODS, COMPUTED, PROPS, MIXINS> = VueComponent<
  ADDONS & {
    currentViewPortWidth: number;
    currentViewPort: ViewPort;
    isMobileViewPort: boolean;
  } & MIXINS,
  DATA,
  METHODS,
  COMPUTED,
  PROPS
>;
