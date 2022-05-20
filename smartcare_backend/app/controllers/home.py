from routes.web import web

@web.route('/', methods=['GET'])
def home():
  return 'Khai phá dữ liệu'
