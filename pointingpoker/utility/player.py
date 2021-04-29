import json
import requests


url=''
class player():
        def __init__(self,name,v):
                self.name=name
                self.vote=v
class points():
    def __init__(self,name,count):
        self.name=name
        self.count=count
        

def getSomeRandomData():
        players=[]
        players.append(player('Name1',3))
        players.append(player('Name2',5))

        players.append(player('Name3',9))

        return players

def getData():
    main_ret={}

   
    datas=getJsonData(url)
    if datas==None:
        main_ret['pdata']=getSomeRandomData()
        main_ret['psummary']=getSomeRandomPoints()
        main_ret['maxPoint']=0
        return main_ret

    # player DATA
    PD=[]
    players_data_json=datas['Players']
    print("\n\n\n\nPLAYER DATA===",players_data_json)
    for pl in players_data_json:
        name=pl['Name']
        vote=pl['Points']
    
        p=player(name,vote)
        PD.append(p)

    main_ret['pdata']=PD

    # Point Summary

    PS=[]
    ss=datas['SessionStats']
    PV=ss['PointVotes']
    curr_max=0
    curr_mv=0
    for p in PV:
        name=p['Points']
        count=int(p['Votes'])
        PS.append(points(name,count))
        if count>curr_mv:
            curr_mv=count
            curr_max=name
    
    # now store this data
    main_ret['psummary']=PS
    main_ret['maxPoint']=curr_max



    return main_ret

def getJsonData(url):
    try:
        r = requests.get(url = url)
        # print(r.json())
        return r.json()
    except Exception as e:
        print("error occured ",e)
        return None

def getSomeRandomPoints():
    p=[]
    p.append(points('6','2'))
    p.append(points('1','5'))
    p.append(points('55','23'))

    return p



    