def respondErrorValidate(errors, data = None, message = None, status = 422):
  if message == None:
    message = "%i" % status
  response = {
    "data": data,
    "error": errors,
    "message": message,
    "status": status
  }
  return response, status


def respondSuccess(data, message = None, status = 200):
  if message == None:
    message = "%i" % status
  response = {
    "data": data,
    "message": message,
    "status": status
  }
  return response, status
