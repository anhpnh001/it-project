import 'blockly';

declare module 'blockly' {
    interface ToolboxButton {
        callbackKey?: string;
    }
}
