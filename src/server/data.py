import json
import pymysql
from datetime import datetime

json_file_path ='./video_info_publish.json'

host = 'localhost'
user = 'andrew'
password = 'yudi'
database = 'repeats'

with open(json_file_path, 'r') as json_file:
    video_info = json.load(json_file)

connection = pymysql.connect(
    host=host,
    user=user,
    password=password,
    database=database,
    use_unicode=True,
    charset='utf8mb4'
)

def insertFollower(data):
    try:
        profileImgUrl = ''

        with connection.cursor() as cursor:
            connection.begin()

            for item in data:
                features = ""
                relatedPostId = None
                analyze = item["analyze"]


                # 分析結果の挿入
                sql_analyze_data = "INSERT INTO Analysis (relatedPostId, title, content, features, updatedAt) VALUES (%s, %s, %s, %s, %s)"
                cursor.execute(sql_analyze_data, (relatedPostId, analyze["title"], analyze["content"], analyze["features"], datetime.now()))

                # # 挿入されたフォロワーのIDを取得
                # follower_id = cursor.lastrowid

                # # ユーザーとフォロワーの関係の挿入
                # sql_insert_relation = "INSERT INTO _UserToFollower (A, B) VALUES (%s, %s)"
                # cursor.execute(sql_insert_relation, (follower_id, user_id))
            
            connection.commit()
    finally:
        connection.close()

insertFollower(video_info)
