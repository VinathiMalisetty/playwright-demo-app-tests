export interface TestCase {
  id: string;
  description: string;
  section: string;
  taskTitle: string;
  column: string;
  tags: string[];
}

export interface TestCasesData {
  testCases: TestCase[];
}
