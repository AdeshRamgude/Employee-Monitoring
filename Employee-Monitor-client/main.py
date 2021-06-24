import pyautogui
import time
import os
from datetime import datetime
from pynput.keyboard import Key,Listener
import threading
from datetime import date
from datetime import datetime

import pyrebase
Config = {
    'apiKey': "AIzaSyCqYPSR5N8Sw_kVUJc5b7Hk7jE8OwOfOIQ",
    'authDomain': "first-todo-app-2eaa3.firebaseapp.com",
    'databaseURL': "https://first-todo-app-2eaa3-default-rtdb.europe-west1.firebasedatabase.app",
    'projectId': "first-todo-app-2eaa3",
    'storageBucket': "first-todo-app-2eaa3.appspot.com",
    'messagingSenderId': "938941825211",
    'appId': "1:938941825211:web:8207a970f941265501299e",
    'measurementId': "G-DLH5958F2R"
}


  #https://www.c-sharpcorner.com/article/firebase-crud-operations-using-python/

firebase=pyrebase.initialize_app(Config)
storage=firebase.storage()
database=firebase.database()
# Get a reference to the auth service
auth = firebase.auth()
email=input("Email:")
password=input("Password:")
# Log the user in
user = auth.sign_in_with_email_and_password(email, password)

# Get the user's idToken 
token = user['localId']
print(token)

#storage=firebase.storage()
#img="String.cpp"
#upload
#storage.child(img).put(img)


CC=0
dc=0
ac=0
oc=0

def on_press(key):
 global CC
 global dc
 global oc
 global ac 
 if (('{0} pressed'.format(key)=="'a' pressed") or ('{0} pressed'.format(key)=="'b' pressed") or ('{0} pressed'.format(key)=="'c' pressed")
  or ('{0} pressed'.format(key)=="'e' pressed") or ('{0} pressed'.format(key)=="'f' pressed") or ('{0} pressed'.format(key)=="'g' pressed")
  or ('{0} pressed'.format(key)=="'h' pressed") or ('{0} pressed'.format(key)=="'i' pressed") or ('{0} pressed'.format(key)=="'j' pressed")
  or ('{0} pressed'.format(key)=="'k' pressed") or ('{0} pressed'.format(key)=="'l' pressed") or ('{0} pressed'.format(key)=="'m' pressed")
  or ('{0} pressed'.format(key)=="'n' pressed") or ('{0} pressed'.format(key)=="'o' pressed") or ('{0} pressed'.format(key)=="'p' pressed")
  or ('{0} pressed'.format(key)=="'q' pressed") or ('{0} pressed'.format(key)=="'r' pressed") or ('{0} pressed'.format(key)=="'s' pressed")
  or ('{0} pressed'.format(key)=="'t' pressed") or ('{0} pressed'.format(key)=="'u' pressed") or ('{0} pressed'.format(key)=="'v' pressed")
  or ('{0} pressed'.format(key)=="'w' pressed") or ('{0} pressed'.format(key)=="'x' pressed") or ('{0} pressed'.format(key)=="'y' pressed")
  or ('{0} pressed'.format(key)=="'z' pressed") or ('{0} pressed'.format(key)=="'d' pressed" )
  or ('{0} pressed'.format(key)=="'A' pressed") or ('{0} pressed'.format(key)=="'B' pressed") or ('{0} pressed'.format(key)=="'C' pressed")
  or ('{0} pressed'.format(key)=="'D' pressed") or ('{0} pressed'.format(key)=="'E' pressed") or ('{0} pressed'.format(key)=="'F' pressed")
  or ('{0} pressed'.format(key)=="'G' pressed") or ('{0} pressed'.format(key)=="'H' pressed") or ('{0} pressed'.format(key)=="'I' pressed")
  or ('{0} pressed'.format(key)=="'J' pressed") or ('{0} pressed'.format(key)=="'K' pressed") or ('{0} pressed'.format(key)=="'L' pressed")
  or ('{0} pressed'.format(key)=="'M' pressed") or ('{0} pressed'.format(key)=="'N' pressed") or ('{0} pressed'.format(key)=="'O' pressed")
  or ('{0} pressed'.format(key)=="'P' pressed") or ('{0} pressed'.format(key)=="'Q' pressed") or ('{0} pressed'.format(key)=="'R' pressed")
  or ('{0} pressed'.format(key)=="'S' pressed") or ('{0} pressed'.format(key)=="'T' pressed") or ('{0} pressed'.format(key)=="'U' pressed")
  or ('{0} pressed'.format(key)=="'V' pressed") or ('{0} pressed'.format(key)=="'W' pressed") or ('{0} pressed'.format(key)=="'X' pressed")
  or ('{0} pressed'.format(key)=="'Y' pressed") or ('{0} pressed'.format(key)=="'Z' pressed")):
  print('{0} pressed'.format(key))
  CC+=1
 elif (('{0} pressed'.format(key)=="'1' pressed") or ('{0} pressed'.format(key)=="'2' pressed") or ('{0} pressed'.format(key)=="'3' pressed")
  or ('{0} pressed'.format(key)=="'4' pressed") or ('{0} pressed'.format(key)=="'5' pressed") or ('{0} pressed'.format(key)=="'6' pressed")
  or ('{0} pressed'.format(key)=="'7' pressed") or ('{0} pressed'.format(key)=="'8' pressed")  or ('{0} pressed'.format(key)=="'0' pressed")):
  dc+=1 
  print('{0} pressed'.format(key))
 elif (('{0} pressed'.format(key)=="Key.up pressed") or ('{0} pressed'.format(key)=="Key.down pressed") or ('{0} pressed'.format(key)=="Key.left pressed") or ('{0} pressed'.format(key)=="Key.right pressed")):
  print('{0} pressed'.format(key))
  ac+=1
 else:
  print('{0} pressed'.format(key))

def on_release(key):
    if key == Key.esc:
        return False


def keybo():
  #x=1
  start = time.time()
  while time.time() - start < 10:
    now = datetime.now()
    tag=str(now.strftime("%d%m%Y%H%M%S"))
    img=(tag)+".png"
    today = date.today()
    d1 = str(today.strftime("%d-%m-%Y"))
    pyautogui.screenshot(img)
    storage.child(token).child(d1).child(img).put(img)
    url=storage.child(token).child(d1).child(img).get_url(user['idToken'])
    #tag=str(datetime.today().strftime('%Y-%m-%d-%H:%M:%S'))
    #database.child('users').child(token).child("activity_images").child(str(x)).set(url)s
    surl={"url":url}
    database.child('users').child(token).child("activity_images").child(d1).push(surl)
    print(url)
    os.remove(img)
   # x+=1
    time.sleep(2)

t2 = threading.Thread(target=keybo, name='t2') 

t2.start()
with Listener(
        on_press=on_press,
        on_release=on_release) as listener:
         listener.join()
         
data={"char":CC, "digit":dc, "arrow":ac, "spl":dc}
#ref = db.reference('greetings-demo-awmkul')
print('adding data to database')
d=date.today()
d2 = str(d.strftime("%d-%m-%Y"))
database.child('users').child(token).child(d2).child('count').set(data)
print("char count=",CC)
print("digit count=",dc)
print("Arrow count=",ac)
print("shift,tav,alt,space... etc count=",dc)