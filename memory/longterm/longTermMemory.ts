// Долговременная память: хранит наиболее важные воспоминания с дополнительными тегами и приоритетами
type LongTermRecord = {
  key: string;
  value: string;
  tags: string[];
  importance: number; // от 1 до 10
  createdAt: number;
};

export class LongTermMemory {
  private memory: LongTermRecord[];

  constructor() {
    this.memory = [];
  }

  save(key: string, value: string, tags: string[] = [], importance: number = 5) {
    this.memory.push({
      key,
      value,
      tags,
      importance,
      createdAt: Date.now()
    });
  }

  findByTag(tag: string): LongTermRecord[] {
    return this.memory.filter(entry => entry.tags.includes(tag));
  }

  getImportant(threshold: number = 7): LongTermRecord[] {
    return this.memory.filter(entry => entry.importance >= threshold);
  }

  recall(key: string): LongTermRecord | undefined {
    return this.memory.find(entry => entry.key === key);
  }

  listAll(): LongTermRecord[] {
    return this.memory;
  }
}
