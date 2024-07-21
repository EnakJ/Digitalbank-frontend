export interface OperationDTO {
  id: number;
  date: Date;
  amount: number;
  type: string;
}

export interface AccountDetails{
  id: string;
  balance: number;
  currentPage: number;
  totalPages: number;
  size: number;
  operationDTOList: OperationDTO[];
}
