class Api::PuzzlesController < ApplicationController
  def index
    puzzles=Puzzle.all
    render json: puzzles
  end
  def show
    puzzle=Puzzle.find(params[:id].to_i)

    render json: puzzle
  end
  def characters
    characters=Puzzle.find(params[:id].to_i).characters
    render json: characters.map { |character| { name: character.name, id: character.id } }
  end

  def checkCoords
    puzzle=Puzzle.find(params[:puzzle_id])
    puzzle.characters.each do |character|
      if character.left.between?(params[:left]*100-2, params[:left]*100+2)

        if character.top.between?(params[:top]*100-2, params[:top]*100+2)
          render json: { correct: true, coords: [ character.left, character.top ] }
          return
        end
      end
    end
    render json: { correct: false }
  end

  def checkWin
    puzzle=Puzzle.find(params[:puzzle_id])
    puzzle.characters.each do |character|
      characterFound=false
      params[:coords].each do |coord|
        if coord[0]==character.left and coord[1]==character.top
          p ("#{character.left},#{character.top} found #{coord}")
          characterFound=true
        end
      end
      unless characterFound
        render json: { win: false }
        return
      end
    end


    render json: { win: true }
  end
end
