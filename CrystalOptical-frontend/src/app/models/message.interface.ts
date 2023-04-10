export interface messageInterface {
  message: string;
}

export interface errorMessageInterface{
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;

}

export interface errorInterface{
  error: errorMessageInterface;
}
