from flask import Flask
import pandas as pd
from fbprophet import Prophet
app = Flask(__name__)

county = pd.read_csv("../dataset/CountyWiseCases.csv")
county['date'] = pd.DatetimeIndex(county['date'])
import datetime
df = county.loc[(county["area"] == "Santa Clara")]
df = df[df['date'] > '2020-12-01']
df = df[["date","reported_cases"]]
df['ds'] = pd.DatetimeIndex(df['date'])
df.drop('date', axis=1, inplace=True)
df_train = df[0:]
df_train.columns = ['y','ds']
m = Prophet(interval_width=0.95,changepoint_prior_scale=0.8)
model = m.fit(df_train)
future = m.make_future_dataframe(periods=90,freq='D')
forecast = m.predict(future)
    
@app.route('/')
def hello_world():
    return {"pediction":forecast[['ds','yhat']].iloc[0,1]}


if __name__ == '__main__':
    app.run()

