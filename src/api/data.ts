import type { DescData } from '@arco-design/web-vue/es/descriptions/interface';
import axios from './interceptor';

export interface ArticleRecord {
  id: string;
  article_id: number;
  title: string;
  data_type_id: string;
  data_one_type_id: string;
  status: '0' | '1' | '2';
  createdTime: string;
}

export interface ArticleParams extends Partial<ArticleRecord> {
  current: number;
  pageSize: number;
}

export interface ArticleListRes {
  list: ArticleRecord[];
  total: number;
}

export function queryArticleList(params: ArticleParams) {
  return axios.get<ArticleListRes>('/api/data/articleList', {
    params,
  });
}

export interface ServiceRecord {
  id: number;
  title: string;
  description: string;
  name?: string;
  actionType?: string;
  icon?: string;
  data?: DescData[];
  enable?: boolean;
  expires?: boolean;
}
export function queryInspectionList() {
  return axios.get('/api/data/quality-inspection');
}

export function queryTheServiceList() {
  return axios.get('/api/data/the-service');
}

export function queryRulesPresetList() {
  return axios.get('/api/data/rules-preset');
}
