/// <reference types="node" />
import { Callbacks, MainWalletBase, SessionOptions, Wallet } from '@cosmos-kit/core';
import EventEmitter from 'events';
import { WCClientV2 } from './client';
import { IChainWCV2, IWCClientV2 } from './types';
export declare class WCWalletV2 extends MainWalletBase {
    clientPromise?: Promise<WCClientV2 | undefined>;
    client?: WCClientV2;
    protected WCClient: IWCClientV2;
    protected _qrUrl: string;
    emitter: EventEmitter;
    constructor(walletInfo: Wallet, ChainWC: IChainWCV2, WCClient: IWCClientV2);
    get appUrl(): any;
    get qrUrl(): string;
    set qrUrl(value: string);
    fetchClient(): Promise<WCClientV2>;
    protected onSetChainsDone(): void;
    connect: (sessionOptions?: SessionOptions, callbacks?: Callbacks) => Promise<void>;
    disconnect: (callbacks?: Callbacks) => Promise<void>;
}
