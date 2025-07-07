class Api::PuzzlesController < ApplicationController
  def index
    puzzles=Puzzle.all
    render json: puzzles
  end
  def show
    puzzle=Puzzle.find(params[:id].to_i)
    game=Game.create()
    render json: { puzzle: puzzle, game_id: game.id }
  end
  def characters
    characters=Puzzle.find(params[:id].to_i).characters
    render json: characters.map { |character| { name: character.name, id: character.id } }
  end

  def checkCoords
    puzzle=Puzzle.find(params[:puzzle_id])
    character=puzzle.characters.where(id: params[:character_id]).first
    if character.left.between?(params[:left]*100-2, params[:left]*100+2)

      if character.top.between?(params[:top]*100-2, params[:top]*100+2)
        render json: { correct: true, coords: [ character.left, character.top ] }
        return
      end
    end

    render json: { correct: false }
  end

  def checkWin
    if not params[:puzzle_id]
      render json: { win: false }
      return
    end
    puzzle=Puzzle.find(params[:puzzle_id])

    puzzle.characters.each do |character|
      characterFound=false
      params[:coords].each do |coord|
        if coord[0]==character.left and coord[1]==character.top
          characterFound=true
        end
      end
      unless characterFound
        render json: { win: false }
        return
      end
    end
    finishedTime=Time.now-Game.find(params[:game_id]).created_at

    render json: { win: true, finishedTime: finishedTime }
  end
  def deleteGame
    if not params[:game_id]
      return
    end
    p Game.find(params[:game_id])
    Game.find(params[:game_id]).destroy()
  end
end
