interface TestResult {
  ancestorTitles: string[];
  duration: number;
  failureDetails: string[];
  failureMessages: string[];
  fullName: string;
  invocations: number;
  location?: any;
  numPassingAsserts: number;
  retryReasons: any[];
  status: string;
  title: string;
}
