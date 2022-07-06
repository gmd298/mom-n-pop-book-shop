class GenresController < ApplicationController

  def index 
    render json: Genre.all
  end

  def show
    genre = Genre.find(params[:id])
    render json: genre
  end

  # Would like to return a list of books associated with a genre
  # Would like to return a list of authors associated with a genre
    # Via serializer? Would these be custom methods?

end
