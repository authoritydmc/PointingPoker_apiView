from flask import render_template,redirect,url_for,Blueprint
from ..utility import player



bp=Blueprint('route1',__name__)



    
@bp.route('/')
def home():

        # Create some random player
        players=player.getData()


        return render_template('main.html',player_data=players)
