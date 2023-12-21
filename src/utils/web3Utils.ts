import { keccak256 } from 'js-sha3';

export const DECIMAL_18 = 1000000000000000000;
export const DECIMAL_9 = 1000000000;

export const gweiToWei = (gwei: number): number => {
    return gwei * DECIMAL_9;
};

export const gewiToEther = (gwei: number): number => {
    return gwei / DECIMAL_9;
};

export const weiToGwei = (wei: number): number => {
    return wei / DECIMAL_9;
};

export const weiToEther = (wei: number): number => {
    return wei / DECIMAL_18;
};

export const etherTowei = (ether: number): number => {
    return ether * DECIMAL_18;
};

export const etherToGwei = (ether: number): number => {
    return ether * DECIMAL_9;
};

export const toCheckSumAddress = (address: string): string => {
    address = address.toLowerCase().replace('0x', '');
    const keccak = keccak256.create();
    keccak.update(address);
    const checksum = keccak.hex();

    let ethereumChecksum = '0x';
    for (let i = 0; i < address.length; i++) {
        ethereumChecksum += parseInt(checksum[i], 16) >= 8 ? address[i].toUpperCase() : address[i];
    }

    return ethereumChecksum;
}

export const isEvmAddress = (address: string): boolean => {
    const ethereumAddressRegex = /^(0x)?[0-9a-fA-F]{40}$/;
    return ethereumAddressRegex.test(address);
}
