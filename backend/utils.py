from flask import url_for
from config import DATA_IMAGES_PATH
from PIL import Image, ImageFont, ImageDraw, ImageOps
import os


def getImage(photo, prefixe, callback):
    base_path = './static/' + DATA_IMAGES_PATH
    input_name = photo.get('path_file_photo')
    input_path = base_path + input_name
    if prefixe:
        output_name = prefixe + '_' + input_name
    else:
        output_name = input_name
    output_path = base_path + output_name
    image = Image.open(input_path)
    output_exists = os.path.exists(output_path)

    img = {
        'input_exists': os.path.exists(input_path),
        'output_name': output_name,
        'output_path': output_path,
        'output_url': url_for('static', filename=DATA_IMAGES_PATH + output_name),
        'image': image
    }
    if not(callback is None) and not(output_exists):
        try:
            callback(img)
        except Exception as exception:
            print('getImage Invalid image')
            print(exception)

    return img


def getThumbnail(photo):
    h = 100

    def callback(img):
        #initW, initH = image.size
        #ratio = h / initH
        #image.resize((int(initW*ratio), h))
        image = img.get('image')
        image = ImageOps.fit(image, (h, h), Image.ANTIALIAS)
        image.save(img.get('output_path'))
    return getImage(photo, 'thumbnail', callback)


def getMedium(photo):
    def callback(img):
        image = img.get('image')
        image.thumbnail((800, 800))
        image.save(img.get('output_path'))
        addWatherMark(img, photo)
    return getImage(photo, 'medium', callback)


def getLarge(photo):
    def callback(img):
        addWatherMark(img, photo)
    return getImage(photo, 'large', callback)


def addWatherMark(img, photo):
    copyright_text = photo.get('dico_licence_photo').get(
        'description_licence_photo')
    font = ImageFont.truetype("./static/fonts/openSans.ttf", 14)
    if img.get('input_exists'):
        print('ok', photo)
        try:
            image = img.get('image')
            draw = ImageDraw.Draw(image)
            width, height = image.size
            draw.text((10, height-24), copyright_text,
                      font=font, fill=(255, 255, 255, 255))
            image.save(img.get('output_path'))
        except Exception:
            print('addWatherMark Invalid image')
    return img
