export interface IResult {
    description: string;
    input: any;
    result?: any;
    error?: Error;
}

export interface IResultTyped extends IResult {
    type: ResultType;
}

export enum ResultType {
    Success = "success",
    Warning = "warning",
    Error = "error",
}
