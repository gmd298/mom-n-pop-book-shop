class BooksController < ApplicationController

  def index 
    render json: Book.all
  end

  def show
    author = Book.find(params[:id])
    render json: author 
  end

  def create 
    book = Book.create!(book_params)
    render json: book, status: :created
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
