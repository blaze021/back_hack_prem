# API LINK    

https://backhackerprem.herokuapp.com/

## Dataset

https://s3-ap-southeast-1.amazonaws.com/he-public-data/Leaderboard_Initial_Dataset65148c7.json

## Routes

[GET]

    - '/' : response = res.send('We are on home');

    - '/team' : response = res.send('We are on team');

    - '/match' : response = res.send('We are on match making');

    - '/sort' : response = res.send('Get the sorted data');

    - '/sort/name' : response = res.json(leaderBoard);

    - '/sort/score' : response = res.json(leaderBoard);

    - '/search' : response = res.send('Add a search parameter');

    - '/search/name/:teamName' : response = res.json(leaderBoard);

    - '/search/score/:scoreValue' : response = res.json(leaderBoard);


[POST]

    - '/team/createTeam' : response = res.json(createTeam);


[PATCH]

    - 'match/team1/:id1&:id2' : response = res.json(updateTeam1); res.json(updateTeam2);

    - 'match/team2/:id1&:id2' : response = res.json(updateTeam1); res.json(updateTeam2);

    - 'match/tie/:id1&:id2' : response = res.json(updateTeam1); res.json(updateTeam2);


[ID] _id of mongodb for testing


    [
    {
        "_id": "5fd070b30e45b918c0b854d2",
        "team_name": "A_Rex",
        "wins": 6,
        "losses": 5,
        "ties": 2,
        "score": 8
    },
    {
        "_id": "5fd070d9c4dffcce2a7c593b",
        "team_name": "Konklux",
        "wins": 3,
        "losses": 2,
        "ties": 2,
        "score": 5
    },
    {
        "_id": "5fd070d9c4dffcce2a7c595d",
        "team_name": "Konklux",
        "wins": 0,
        "losses": 0,
        "ties": 0,
        "score": 0
    },
    {
        "_id": "5fd070d9c4dffcce2a7c59a7",
        "team_name": "Konklux",
        "wins": 0,
        "losses": 0,
        "ties": 0,
        "score": 0
    },
    {
        "_id": "5fd070d9c4dffcce2a7c59ac",
        "team_name": "Konklux",
        "wins": 0,
        "losses": 0,
        "ties": 0,
        "score": 0
    },
    {
        "_id": "5fd070d9c4dffcce2a7c59e8",
        "team_name": "Konklux",
        "wins": 0,
        "losses": 0,
        "ties": 0,
        "score": 0
    },
    {
        "_id": "5fd070d9c4dffcce2a7c59fb",
        "team_name": "Konklux",
        "wins": 0,
        "losses": 0,
        "ties": 0,
        "score": 0
    },
    {
        "_id": "5fd070d9c4dffcce2a7c5a22",
        "team_name": "Konklux",
        "wins": 0,
        "losses": 0,
        "ties": 0,
        "score": 0
    },
    {
        "_id": "5fd070d9c4dffcce2a7c5a6e",
        "team_name": "Konklux",
        "wins": 0,
        "losses": 0,
        "ties": 0,
        "score": 0
    },
    {
        "_id": "5fd070d9c4dffcce2a7c5aad",
        "team_name": "Konklux",
        "wins": 0,
        "losses": 0,
        "ties": 0,
        "score": 0
    },
    {
        "_id": "5fd070d9c4dffcce2a7c5af4",
        "team_name": "Konklux",
        "wins": 0,
        "losses": 0,
        "ties": 0,
        "score": 0
    },
     {
        "_id": "5fd070d9c4dffcce2a7c593c",
        "team_name": "Stronghold",
        "wins": 12,
        "losses": 0,
        "ties": 0,
        "score": 12
    },
    {
        "_id": "5fd070d9c4dffcce2a7c594c",
        "team_name": "Stronghold",
        "wins": 0,
        "losses": 0,
        "ties": 0,
        "score": 0
    },
    {
        "_id": "5fd070d9c4dffcce2a7c59a6",
        "team_name": "Stronghold",
        "wins": 0,
        "losses": 0,
        "ties": 0,
        "score": 0
    },
    {
        "_id": "5fd070d9c4dffcce2a7c59e2",
        "team_name": "Stronghold",
        "wins": 0,
        "losses": 0,
        "ties": 0,
        "score": 0
    },
    {
        "_id": "5fd070d9c4dffcce2a7c5a54",
        "team_name": "Stronghold",
        "wins": 0,
        "losses": 0,
        "ties": 0,
        "score": 0
    },
    {
        "_id": "5fd070d9c4dffcce2a7c5ab7",
        "team_name": "Stronghold",
        "wins": 0,
        "losses": 0,
        "ties": 0,
        "score": 0
    },
    {
        "_id": "5fd070d9c4dffcce2a7c5afc",
        "team_name": "Stronghold",
        "wins": 0,
        "losses": 0,
        "ties": 0,
        "score": 0
    }
]