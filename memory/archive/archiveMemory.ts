// Архивная память: сохраняет старые воспоминания, которые могут быть восстановлены позже
type ArchiveRecord = {
  key: string;
  value: string;
  timestamp: number;
};

export class ArchiveMemory {
  private archive: ArchiveRecord[];

  constructor() {
    this.archive = [];
  }

  store(key: string, value: string) {
    this.archive.push({
      key,
      value,
      timestamp: Date.now()
    });
  }

  retrieve(key: string): ArchiveRecord | undefined {
    return this.archive.find(entry => entry.key === key);
  }

  forget(key: string) {
    this.archive = this.archive.filter(entry => entry.key !== key);
  }

  listKeys(): string[] {
    return this.archive.map(entry => entry.key);
  }
}
