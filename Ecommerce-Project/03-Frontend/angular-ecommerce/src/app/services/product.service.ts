import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../common/product';
import { map } from 'rxjs/operators';
import { ProductCategory } from '../common/product-category';

@Injectable({
<<<<<<< HEAD
  providedIn: 'root',
})
export class ProductService {
=======
  providedIn: 'root'
})
export class ProductService {

>>>>>>> 530cdd6e1c2c810536e8b60456e4e9667c0c4c16
  private baseUrl = 'http://localhost:8080/api/products';

  private categoryUrl = 'http://localhost:8080/api/product-category';

<<<<<<< HEAD
  constructor(private httpClient: HttpClient) {}

  getProduct(theProductId: number): Observable<Product> {
=======
  constructor(private httpClient: HttpClient) { }

  getProduct(theProductId: number): Observable<Product> {

>>>>>>> 530cdd6e1c2c810536e8b60456e4e9667c0c4c16
    // need to build URL based on product id
    const productUrl = `${this.baseUrl}/${theProductId}`;

    return this.httpClient.get<Product>(productUrl);
  }

<<<<<<< HEAD
  getProductListPaginate(
    thePage: number,
    thePageSize: number,
    theCategoryId: number
  ): Observable<GetResponseProducts> {
    // need to build URL based on the category id, page and size
    const searchUrl =
      `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}` +
      `&page=${thePage}&size=${thePageSize}`;
=======
  getProductListPaginate(thePage: number,
    thePageSize: number,
    theCategoryId: number): Observable<GetResponseProducts> {

    // need to build URL based on the category id, page and size
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
      + `&page=${thePage}&size=${thePageSize}`;
>>>>>>> 530cdd6e1c2c810536e8b60456e4e9667c0c4c16

    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }

  getProductList(theCategoryId: number): Observable<Product[]> {
<<<<<<< HEAD
=======

>>>>>>> 530cdd6e1c2c810536e8b60456e4e9667c0c4c16
    // need to build URL based on the category id
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.getProducts(searchUrl);
  }

  searchProducts(theKeyword: string): Observable<Product[]> {
<<<<<<< HEAD
=======

>>>>>>> 530cdd6e1c2c810536e8b60456e4e9667c0c4c16
    // need to build URL based on the keyword
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.getProducts(searchUrl);
  }

<<<<<<< HEAD
  searchProductsPaginate(
    thePage: number,
    thePageSize: number,
    theKeyword: string
  ): Observable<GetResponseProducts> {
    // need to build URL based on keyword, page and size
    const searchUrl =
      `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}` +
      `&page=${thePage}&size=${thePageSize}`;
=======
  searchProductsPaginate( thePage: number,
                          thePageSize: number,
                          theKeyword: string): Observable<GetResponseProducts> {

    // need to build URL based on keyword, page and size
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`
                    + `&page=${thePage}&size=${thePageSize}`;
>>>>>>> 530cdd6e1c2c810536e8b60456e4e9667c0c4c16

    return this.httpClient.get<GetResponseProducts>(searchUrl);
  }

  private getProducts(searchUrl: string): Observable<Product[]> {
<<<<<<< HEAD
    return this.httpClient
      .get<GetResponseProducts>(searchUrl)
      .pipe(map((response) => response._embedded.products));
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient
      .get<GetResponseProductCategory>(this.categoryUrl)
      .pipe(map((response) => response._embedded.productCategory));
  }
=======
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(map(response => response._embedded.products));
  }

  getProductCategories(): Observable<ProductCategory[]> {
    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(map(response => response._embedded.productCategory));
  }

>>>>>>> 530cdd6e1c2c810536e8b60456e4e9667c0c4c16
}

// This interface is going to help us unwrap Json data from Spring Data REST api and make use of the _embedded entry that comes from spring data rest api
interface GetResponseProducts {
  _embedded: {
    products: Product[];
<<<<<<< HEAD
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
=======
  }
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
>>>>>>> 530cdd6e1c2c810536e8b60456e4e9667c0c4c16
}

interface GetResponseProductCategory {
  _embedded: {
    productCategory: ProductCategory[];
<<<<<<< HEAD
  };
}
=======
  }
}
>>>>>>> 530cdd6e1c2c810536e8b60456e4e9667c0c4c16
