import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
<<<<<<< HEAD
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
=======
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  
>>>>>>> 530cdd6e1c2c810536e8b60456e4e9667c0c4c16
  products: Product[] = [];
  currentCategoryId: number = 1;
  previousCategoryId: number = 1;
  searchMode: boolean = false;

  //new properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

<<<<<<< HEAD
  previousKeyword: string = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
=======
  previousKeyword: string = "";
  
  constructor(private productService: ProductService,
              private cartService: CartService, 
              private route: ActivatedRoute) {}
 
  ngOnInit(): void {
>>>>>>> 530cdd6e1c2c810536e8b60456e4e9667c0c4c16
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }

  listProducts() {
<<<<<<< HEAD
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts();
    } else {
=======

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if(this.searchMode){
      this.handleSearchProducts();
    }
    else{
>>>>>>> 530cdd6e1c2c810536e8b60456e4e9667c0c4c16
      this.handleListProducts();
    }
  }

  handleSearchProducts() {
<<<<<<< HEAD
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    //if we have a different keyword than previous then set the page no = 1
    if (this.previousKeyword != theKeyword) {
=======
    
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    //if we have a different keyword than previous then set the page no = 1
    if(this.previousKeyword != theKeyword){
>>>>>>> 530cdd6e1c2c810536e8b60456e4e9667c0c4c16
      this.thePageNumber = 1;
    }

    this.previousKeyword = theKeyword;

    console.log(`keyword=${theKeyword}, thePageNumber=${this.thePageNumber}`);

    // now search for product using keyword
<<<<<<< HEAD
    this.productService
      .searchProductsPaginate(
        this.thePageNumber - 1,
        this.thePageSize,
        theKeyword
      )
      .subscribe(this.processResult());
=======
    this.productService.searchProductsPaginate( this.thePageNumber - 1,
                                                this.thePageSize,
                                                theKeyword).subscribe(this.processResult());
>>>>>>> 530cdd6e1c2c810536e8b60456e4e9667c0c4c16
  }

  handleListProducts() {
    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

<<<<<<< HEAD
    if (hasCategoryId) {
      //get the "id" param stringconvert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    } else {
=======
    if(hasCategoryId) {
      //get the "id" param stringconvert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }
    else{
>>>>>>> 530cdd6e1c2c810536e8b60456e4e9667c0c4c16
      // not category id available... default to categor id 1
      this.currentCategoryId = 1;
    }

    //
    // check if we have a different category than the previous
    // Note Angular will reuse a component if it is currently being viewed
<<<<<<< HEAD

    // if we have a different category id then the previous then reset the pageNumber back to 1

    if (this.previousCategoryId != this.currentCategoryId) {
=======
    
    // if we have a different category id then the previous then reset the pageNumber back to 1

    if(this.previousCategoryId != this.currentCategoryId){
>>>>>>> 530cdd6e1c2c810536e8b60456e4e9667c0c4c16
      this.thePageNumber = 1;
    }

    this.previousCategoryId = this.currentCategoryId;
<<<<<<< HEAD
    console.log(
      `currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`
    );

    // now get the product for the given category id
    this.productService
      .getProductListPaginate(
        this.thePageNumber - 1,
        this.thePageSize,
        this.currentCategoryId
      )
      .subscribe(this.processResult());
  }

  updatePageSize(pageSize: string) {
=======
    console.log(`currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`);

    // now get the product for the given category id
    this.productService.getProductListPaginate( this.thePageNumber - 1, 
                                                this.thePageSize,
                                                this.currentCategoryId)
                                                .subscribe(this.processResult());
  }

  updatePageSize(pageSize: string){
>>>>>>> 530cdd6e1c2c810536e8b60456e4e9667c0c4c16
    this.thePageSize = +pageSize;
    this.thePageNumber = 1;
    this.listProducts();
  }

<<<<<<< HEAD
  processResult() {
    return (data: any) => {
      console.log(data);

      this.products = data._embedded.products;
      console.log(this.products);

=======
  processResult(){
    return (data: any) => {
      this.products = data._embedded.products;
>>>>>>> 530cdd6e1c2c810536e8b60456e4e9667c0c4c16
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }

  addToCart(theProduct: Product) {
    console.log(`Adding to cart : ${theProduct.name}, ${theProduct.unitPrice}`);

    const theCartItem = new CartItem(theProduct);

    this.cartService.addTOCart(theCartItem);
<<<<<<< HEAD
  }
=======
    
  }

>>>>>>> 530cdd6e1c2c810536e8b60456e4e9667c0c4c16
}
