declare module 'crypto-browserify' {
    import { Buffer } from 'buffer';

    export function randomBytes(size: number): Buffer;
}
