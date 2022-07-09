class BooksController < ApplicationController

  # RESTful --- CRUD methods
  # 10 queries for all authors for bookx + 1 queyr for book
  # N + 1 query

  def index 
    # custom class method or instance method in model?
    books = Book.all.order(id: :desc).limit(params[:limit])
    books = books.where("id < ?", params[:cursor]) if params[:cursor]
    render json: books
  end

  def show
    book = Book.find(params[:id])
    render json: book 
  end

  def create 
    #ActiveRecord::Base.transaction do
    #  author = Author.create!(author_params)
      @book = Book.create!(book_params)   
    #end
    render json: @book, status: :created
  end
      # How would I create a new book AND a new author?

  def update
    book = Book.find(params[:id])
    if book.update_attributes(book_params)
      render json: {status: "SUCCESS", message: "Book updated successfully", data:book}, status: :ok
    else
      render json: {status: "ERROR", message: "Book not updated", data:book.errors}, status: :unprocessable_entity
    end
  end

  def featured
    books = Book.all
    featured_books = 4.times.map { books.sample }
    render json: featured_books, status: :ok
  end

        # Are these right? ^v
  def update_book_quantity
    book = Book.find(params[:id])
    if book.update_attributes(book_quantity)
      render json: {status: "SUCCESS", message: "Quantity updated successfully", data:book}, status: :ok
    else
      render json: {status: "ERROR", message: "Quantity not updated", data:book.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    book = Book.find(params[:id])
    book.destroy
    render json: {status: "SUCCESS", message: "Deleted book", data:book}, status: :ok
  end



  private 

  def book_params  
    params.permit(:title, :description, :author_id, :store_id)
  end # There is only one store. Do I need to include :store_id?
      # User should be able to assign a genre to the book. 
      # How would you do this with the through table setup?

  def book_quantity
    params.permit(:quantity)
  end

end
