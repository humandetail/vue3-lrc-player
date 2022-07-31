interface LrcItem {
  startTime: number;
  duration: number;
  children: ChildItem[];
  isFirstRow?: boolean;
}

type ChildItem = Pick<LrcItem, 'duration' | 'startTime'> & { text: string }
