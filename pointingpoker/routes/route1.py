from flask import render_template,redirect,url_for,Blueprint,request
from ..utility import player



bp=Blueprint('route1',__name__)



@bp.route('/') 
def home():
        url=request.args.get('url',None)
        if url!=None:
                player.url=url
                players=player.getData()
                return render_template('main2.html',player_data=players)
        return render_template('main.html')



