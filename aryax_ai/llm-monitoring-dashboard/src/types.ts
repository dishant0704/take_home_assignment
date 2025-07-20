export interface ListItemType {
  chart(chart: any): [any, any];
  id: string;
  title: string;
  description: string;
  chartName: string;
   chartData?: any
}

export type ChartDataType = {
  timeStamp?: string;
  tokens?: number;
  latency_ms?: number;
  request_count?: number;
  model_name?: string;
  cost?: number;
};

export type ChartObject = {
  data: ChartDataType[];
  dataName: string
}