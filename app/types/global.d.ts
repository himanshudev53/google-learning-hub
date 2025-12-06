export { };

declare global {
    interface Window {
        gtag: (
            type: string,
            action: string,
            options?: {
                value?: number;
                event_label?: string;
                non_interaction?: boolean;
                [key: string]: any;
            }
        ) => void;
    }
}