import { ErrorReason } from "./errorreason.interface";

export interface AxaError {
  errorCode: string;
  errorMessage: string;
  errorReasons?: ErrorReason[];
}
