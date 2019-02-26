export interface CommonAccount{
    accountNo:string,
    desc?:string,
    bank?:string,
    holderName?:string
}

export interface CommonDimension{
    height:number,
    width:number
}

export interface CommonPrice{
    currency?:string,
    value:number
}

export class CommonTransactionError{
    code:string;

    message:string;
}

export interface CommonTransactionInfo{
    txnDate?:Date,
    txnRefNo?:string,
    txnError?:CommonTransactionError
}

export interface CommonTransactionResult<T extends CommonTransactionInfo> {
    success:boolean,
    txnInfo:T,
}

export interface Dict<T extends Object>{
    [key:string]:T;
}

export interface Dict<T extends Object>{
    [key:number]:T;
}

export interface TeamSiteResponse<T extends any>{
    status:number;
    error:string;
    objects:T[]
}

export function createPrice():CommonPrice
export function createPrice(value:number,currency:string):CommonPrice
export function createPrice(value?:number,currency?:string):CommonPrice{
    return {
      value:value || 0,
      currency:currency || 'HKD'
    }
}
