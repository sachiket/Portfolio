// Simple static storage interface for portfolio website
// No database operations needed for a static portfolio

export interface IStorage {
  // Portfolio is completely static - no storage operations needed
}

export class StaticStorage implements IStorage {
  constructor() {
    // Static portfolio - no storage initialization needed
  }
}

export const storage = new StaticStorage();
