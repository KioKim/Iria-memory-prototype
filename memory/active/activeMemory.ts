// Активная память: хранит временные данные текущей сессии
export class ActiveMemory {
  private memory: Map<string, string>;

  constructor() {
    this.memory = new Map();
  }

  remember(key: string, value: string) {
    this.memory.set(key, value);
  }

  recall(key: string): string | undefined {
    return this.memory.get(key);
  }

  forget(key: string) {
    this.memory.delete(key);
  }

  clear() {
    this.memory.clear();
  }
}
