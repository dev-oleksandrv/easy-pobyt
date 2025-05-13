import { KyInstance } from "ky";

export class BaseService {
  constructor(private readonly apiClient: KyInstance) {}
}
