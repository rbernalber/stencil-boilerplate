/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Size } from "./types/size";
import { IconName } from "./components/my-icon/types/icon-name";
export namespace Components {
    interface MyButton {
        /**
          * Set border button, default 'true'
         */
        "border": boolean;
        "isDisabled": boolean;
        /**
          * Set the role, respectively `button`
         */
        "role": string;
        /**
          * Specifies the default size of button
         */
        "size": Size;
        /**
          * Specifies type of input
         */
        "type": 'button' | 'submit' | 'reset';
    }
    interface MyCard {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyIcon {
        /**
          * Set the icon to hidden, respectively `true`, to remove it from the accessibility tree.
         */
        "ariaHidden": string;
        /**
          * Specifies the label to use for accessibility. Defaults to the icon name.
         */
        "ariaLabel"?: string;
        /**
          * The name specifies which icon to use from the list
         */
        "icon": IconName;
        /**
          * Specifies the default size `SMALL | MEDIUM | LARGE` of the icon. MEDIUM is default
         */
        "size": Size;
    }
    interface MyInput {
        "isRequired": boolean;
        "label"?: string;
        "name"?: string;
        /**
          * Specifies type of input
         */
        "type": 'text' | 'number';
        "value"?: string | number;
    }
    interface MyInputPassword {
        "getValue": () => Promise<boolean>;
        "isPasswordVisible": boolean;
        "placeholder"?: string;
        "value"?: string;
    }
    interface MyModal {
        /**
          * Specifies visibility modal. 'in' is visible, 'out' is hidden.
         */
        "show": 'in' | 'out';
    }
}
declare global {
    interface HTMLMyButtonElement extends Components.MyButton, HTMLStencilElement {
    }
    var HTMLMyButtonElement: {
        prototype: HTMLMyButtonElement;
        new (): HTMLMyButtonElement;
    };
    interface HTMLMyCardElement extends Components.MyCard, HTMLStencilElement {
    }
    var HTMLMyCardElement: {
        prototype: HTMLMyCardElement;
        new (): HTMLMyCardElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyIconElement extends Components.MyIcon, HTMLStencilElement {
    }
    var HTMLMyIconElement: {
        prototype: HTMLMyIconElement;
        new (): HTMLMyIconElement;
    };
    interface HTMLMyInputElement extends Components.MyInput, HTMLStencilElement {
    }
    var HTMLMyInputElement: {
        prototype: HTMLMyInputElement;
        new (): HTMLMyInputElement;
    };
    interface HTMLMyInputPasswordElement extends Components.MyInputPassword, HTMLStencilElement {
    }
    var HTMLMyInputPasswordElement: {
        prototype: HTMLMyInputPasswordElement;
        new (): HTMLMyInputPasswordElement;
    };
    interface HTMLMyModalElement extends Components.MyModal, HTMLStencilElement {
    }
    var HTMLMyModalElement: {
        prototype: HTMLMyModalElement;
        new (): HTMLMyModalElement;
    };
    interface HTMLElementTagNameMap {
        "my-button": HTMLMyButtonElement;
        "my-card": HTMLMyCardElement;
        "my-component": HTMLMyComponentElement;
        "my-icon": HTMLMyIconElement;
        "my-input": HTMLMyInputElement;
        "my-input-password": HTMLMyInputPasswordElement;
        "my-modal": HTMLMyModalElement;
    }
}
declare namespace LocalJSX {
    interface MyButton {
        /**
          * Set border button, default 'true'
         */
        "border"?: boolean;
        "isDisabled"?: boolean;
        /**
          * Emit event onClicked when has click or press ENTER or SPACE
         */
        "onClicked"?: (event: CustomEvent<boolean>) => void;
        /**
          * Set the role, respectively `button`
         */
        "role"?: string;
        /**
          * Specifies the default size of button
         */
        "size"?: Size;
        /**
          * Specifies type of input
         */
        "type"?: 'button' | 'submit' | 'reset';
    }
    interface MyCard {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyIcon {
        /**
          * Set the icon to hidden, respectively `true`, to remove it from the accessibility tree.
         */
        "ariaHidden"?: string;
        /**
          * Specifies the label to use for accessibility. Defaults to the icon name.
         */
        "ariaLabel"?: string;
        /**
          * The name specifies which icon to use from the list
         */
        "icon": IconName;
        /**
          * Specifies the default size `SMALL | MEDIUM | LARGE` of the icon. MEDIUM is default
         */
        "size"?: Size;
    }
    interface MyInput {
        "isRequired"?: boolean;
        "label"?: string;
        "name"?: string;
        "onChanged"?: (event: CustomEvent<string | number>) => void;
        /**
          * Specifies type of input
         */
        "type"?: 'text' | 'number';
        "value"?: string | number;
    }
    interface MyInputPassword {
        "isPasswordVisible"?: boolean;
        "onShowPassword"?: (event: CustomEvent<boolean>) => void;
        "placeholder"?: string;
        "value"?: string;
    }
    interface MyModal {
        /**
          * Specifies visibility modal. 'in' is visible, 'out' is hidden.
         */
        "show"?: 'in' | 'out';
    }
    interface IntrinsicElements {
        "my-button": MyButton;
        "my-card": MyCard;
        "my-component": MyComponent;
        "my-icon": MyIcon;
        "my-input": MyInput;
        "my-input-password": MyInputPassword;
        "my-modal": MyModal;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-button": LocalJSX.MyButton & JSXBase.HTMLAttributes<HTMLMyButtonElement>;
            "my-card": LocalJSX.MyCard & JSXBase.HTMLAttributes<HTMLMyCardElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-icon": LocalJSX.MyIcon & JSXBase.HTMLAttributes<HTMLMyIconElement>;
            "my-input": LocalJSX.MyInput & JSXBase.HTMLAttributes<HTMLMyInputElement>;
            "my-input-password": LocalJSX.MyInputPassword & JSXBase.HTMLAttributes<HTMLMyInputPasswordElement>;
            "my-modal": LocalJSX.MyModal & JSXBase.HTMLAttributes<HTMLMyModalElement>;
        }
    }
}
