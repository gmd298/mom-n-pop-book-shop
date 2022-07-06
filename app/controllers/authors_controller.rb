class AuthorsController < ApplicationController

  def index 
    render json: Author.all
  end

  def show
    author = Author.find(params[:id])
    render json: author 
  end

  def create 
    author = Author.create!(author_params)
    render json: author, status: :created
  end

  def update
    author = Author.find(params[:id])
    if author.update_attributes(author_params)
      render json: {status: "SUCCESS", message: "Author updated successfully", data:author}, status: :ok
    else
      render json: {status: "ERROR", message: "Author not updated", data:author.errors}, status: :unprocessable_entity
    end
  end

  def destroy
    author = Author.find(params[:id])
    author.destroy
    render json: {status: "SUCCESS", message: "Deleted author", data:author}, status: :ok
  end
  
  private 

  def author_params
    params.permit(:name, :hometown, :bio)
  end

end