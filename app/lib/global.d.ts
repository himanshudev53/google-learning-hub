interface Gtag {
    (command: 'config', targetId: string, config?: Record<string, any>): void;
    (command: 'event', eventName: string, eventParams?: Record<string, any>): void;
    (command: 'set', targetId: string, config: Record<string, any>): void;
}

declare global {
    interface Window {
        gtag: Gtag;
    }
}

export { }; 