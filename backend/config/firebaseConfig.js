import admin from "firebase-admin";
import dotenv from "dotenv";
dotenv.config();
// import serviceAccount from "./adch-05-firebase-adminsdk-sx6k1-b15beec041.json" assert { type: "json" };

// const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert({
    type: "service_account",
    project_id: "adch-05",
    private_key_id: "b15beec04147c61321e945cef8d0370085e00baa",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCmbJTKROCG509t\naAy/u6oU6mj27rLn6Ah0Mq2bU85DWdlUIkjVxq9dT83YciGPAxXmDzNN3IgBv+bn\nqNvjSZfUF3/d/AFrVmjnMbJ3rh3XndQSHGnNRC8qwK+JJEO+sGCAn3Ac+4wp0t60\n0ZlqsGkjhL9MWk/llqyFBWWJ+VJrkLa2VQEEuEaq9Y3e39GKYNsGfnmbNOjQfpge\n+E9MMK0LAncI4Uw6KQ46wcW1i9Zk3F21dSaD5EI2HmhecGamIUogkYqSQVjInyDJ\n27pDtysDzc1AtwEhYVOeV2CllUbs8JZ19+S5THbMQWUGPZw+vvYQhORxwnWcuqOq\ncVmxiKhrAgMBAAECggEACUDoVQbXZSjfZbnvW4nXvyn5hCFpmTNxpORcetKCGYSZ\nbPArFJfjkFCrpWlTLFyDjzMxKxckCNTexerBrzWcV5Km7XThr1Iyqwg8YCMyTZbc\n/9TMnTk5Vis4l2uIyMWN2BkFZtclx/2NnIg6+4+riOoMqPYskxt5pDvUlYNjbc+a\n9kUohtY82C1ndqhZKkxcHgyIX80BusCvvqqFloIHtMWszLF6nSEQNgGNdrx1LjwK\n7XPqqI4mhG61x4i1pcqWMQH16YGjMsWjun3GHVr5bpMqDggPml8yQ7PFzWCpQO1Z\nEVnwa04sco27AsQLDR834dcI9xZyhly4aLlKsEI1oQKBgQDqITDPpRx+iY+AlcOT\nRa28I9mXgsZxyIwkUlLr//AzjheKMyDH43lMsvqV7xndNNWOsA7s+CNVXEKMNBKq\ngGV2MJMC8f+WXKI/v8itC7h5fXHmcWthJVl0MJeixPYd3i/x0yo/+zeEIYGMj92o\nt9jD7n2NvFeXszablv/kd0MDHwKBgQC1+FRUgALvTVv19RoB8kG0Np7Pzm3LocVQ\nt/kcaTkDRFZxBjTnWhTTTKRg7n6f6xfeXx9nCU7mfMIh+rNcJbedK0bTQU6i64Hm\n7m4OZ2i4KQWWW17mWNkuMFiBYSa0C8J4U+jG8DNQeSN+gR6hG/S84KEikp0N6HHa\nK32VJ2GdNQKBgQCISHGlLLL9ZQ1HB+Yj37dVgHi0HMdujBInQlRKU1x6ZgeFxmUa\ndWqyHqyGgftIK+zzdb/6aCYJFf8WpWkIHlzxAy1P1ZW07I71FKm3MM9cyIx4WyTq\nE1eSroZVlNi+Ygr+dLBvNcgG/YnvS/72qq1ev4AN9Mf34bWzs52YW2OCeQKBgDrO\nPJpuIASrkEtk4Pm+C0Os3xey00KaTcSvH37x9i27GOA/rDsTnmVGgFye1ibh932y\nadiHZosPyEDo3qupuLO+941vrnTx/LHfXYukGXBiOV8Euh9gmRbXItL0zWgj4L24\nCCK6HysjargIDBjuiuG7Cfe9P6nt81UY9uWLq3z9AoGAYbxmXw6fCmV/xArISasL\noLPLC4W+hYqXcb/C8YwqFrPc7UnH32FLOjVj87iF8Emhs1uoQ05bhTwF18VJb8mF\nVEoBpAwI1TX/WVD4IvCaAjU6mtCHxSbUAtkoHaNvLtH61SwXfgFfEzJ41kVs5qJp\nwHU4lS4F8bdyao8oAfuli5E=\n-----END PRIVATE KEY-----\n",
    client_email: "firebase-adminsdk-sx6k1@adch-05.iam.gserviceaccount.com",
    client_id: "114783041431157687608",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-sx6k1%40adch-05.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
  }),
});

export default admin;
