# Run this file directly to create the database tables.
# Packages
import sys
sys.path.append('../')

# Modules
from app import db

# Clear Metadata
db.metadata.clear()


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(20))
    last_name = db.Column(db.String(20))
    username = db.Column(db.String(20), unique=True)
    password = db.Column(db.String(20))    


if __name__ == "__main__":


    print("Creating database tables...")
    db.create_all()
    print("Done!")
