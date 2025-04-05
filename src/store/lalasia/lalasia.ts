// import { Product } from '@/types/products';
// import { apiClient } from '@/config';
// import { BaseStore, Meta } from '@/store/base.ts';
// import { IReactionDisposer, reaction, runInAction } from 'mobx';
// import { AxiosError } from 'axios';
// import rootStore from '@/store/root/instance.ts';
//
// interface GetProductsListParams {
//     title?: string;
//     price?: number;
//     price_min?: number;
//     price_max?: number;
//     category_id?: number;
// }
//
// export class LalasiaStore extends BaseStore<Product> {
//     private readonly _apiStore = apiClient;
//     private _titleReaction: IReactionDisposer;
//     private _priceReaction: IReactionDisposer;
//     private _priceMinReaction: IReactionDisposer;
//     private _priceMaxReaction: IReactionDisposer;
//     private _categoryIdReaction: IReactionDisposer;
//
//     constructor() {
//         super();
//
//         this._titleReaction = reaction(
//             () => rootStore.query.getParam('title'),
//             (title) => {
//                 this.getProductsList({ title: title?.toString() });
//             },
//         );
//
//         this._priceReaction = reaction(
//             () => rootStore.query.getParam('price'),
//             (price) => {
//                 this.getProductsList({ price: Number(price) });
//             },
//         );
//
//         this._priceMinReaction = reaction(
//             () => rootStore.query.getParam('price_min'),
//             (price_min) => {
//                 this.getProductsList({ price_min: Number(price_min) });
//             },
//         );
//
//         this._priceMaxReaction = reaction(
//             () => rootStore.query.getParam('price_max'),
//             (price_max) => {
//                 this.getProductsList({ price_max: Number(price_max) });
//             },
//         );
//
//         this._categoryIdReaction = reaction(
//             () => rootStore.query.getParam('category_id'),
//             (category_id) => {
//                 this.getProductsList({ category_id: Number(category_id) });
//             },
//         );
//     }
//
//     async getProductsList(params: GetProductsListParams): Promise<void> {
//         this.setMeta(Meta.loading);
//         this.setList([]);
//
//         try {
//             const query = Object.entries(params)
//                 // eslint-disable-next-line @typescript-eslint/no-unused-vars
//                 .filter(([_, value]) => value !== undefined)
//                 .map(
//                     ([key, value]) =>
//                         `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
//                 )
//                 .join('&');
//
//             const response = await this._apiStore.get<Product[]>(
//                 `/products${query ? '?' + query : ''}`,
//             );
//
//             runInAction(() => {
//                 this.setList(response.data);
//                 this.setMeta(Meta.success);
//             });
//         } catch (e) {
//             console.error('Ошибка загрузки продуктов:', e);
//
//             runInAction(() => {
//                 this.setMeta(Meta.error);
//
//                 if (e instanceof Error) {
//                     const axiosError = e as AxiosError;
//                     if (axiosError.response) {
//                         this.setError(axiosError);
//                     }
//                 }
//             });
//         }
//     }
//
//     destroy() {
//         if (this._titleReaction) {
//             this._titleReaction();
//         }
//
//         if (this._priceReaction) {
//             this._priceReaction();
//         }
//
//         if (this._priceMinReaction) {
//             this._priceMinReaction();
//         }
//
//         if (this._priceMaxReaction) {
//             this._priceMaxReaction();
//         }
//
//         if (this._categoryIdReaction) {
//             this._categoryIdReaction();
//         }
//     }
// }
