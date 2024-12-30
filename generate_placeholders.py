from PIL import Image, ImageDraw, ImageFont
import os

# Color palette
BRAND_COLOR = (208, 172, 143)  # #d0ac8f
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

# Directories
BASE_DIR = '/Users/edensitkovetsky/edennnnn/nh-energy/public/images'
DIRS = [
    'avatars',
    'icons',
    ''  # root directory
]

# Image sizes
SIZES = {
    'avatars': [(300, 300)],
    'icons': [(200, 200)],
    '': [(1920, 1080), (800, 600), (600, 400)]
}

def create_placeholder(size, text='NH Energy', color=BRAND_COLOR):
    image = Image.new('RGB', size, color)
    draw = ImageDraw.Draw(image)
    
    # Try to use a system font
    try:
        font = ImageFont.truetype("/Library/Fonts/Arial Hebrew.ttc", size=min(size) // 10)
    except IOError:
        font = ImageFont.load_default()
    
    # Calculate text size and position
    text_bbox = draw.textbbox((0, 0), text, font=font)
    text_width = text_bbox[2] - text_bbox[0]
    text_height = text_bbox[3] - text_bbox[1]
    
    position = ((size[0] - text_width) // 2, (size[1] - text_height) // 2)
    
    # Draw text
    draw.text(position, text, font=font, fill=WHITE)
    
    return image

def generate_placeholders():
    for directory in DIRS:
        full_path = os.path.join(BASE_DIR, directory)
        os.makedirs(full_path, exist_ok=True)
        
        for size in SIZES.get(directory, []):
            # Generate filename based on directory and size
            if directory:
                filename = f'{directory}_placeholder_{size[0]}x{size[1]}.jpg'
            else:
                filename = f'placeholder_{size[0]}x{size[1]}.jpg'
            
            # Create and save image
            image = create_placeholder(size)
            image.save(os.path.join(full_path, filename), quality=85)
        
        # Special case for avatars
        if directory == 'avatars':
            avatar_names = ['ceo', 'cto', 'head-of-sales']
            for name in avatar_names:
                image = create_placeholder((300, 300), text=name.replace('-', ' ').title())
                image.save(os.path.join(full_path, f'{name}.jpg'), quality=85)
        
        # Special case for icons
        if directory == 'icons':
            icon_names = ['charging', 'solar', 'sustainability']
            for name in icon_names:
                image = create_placeholder((200, 200), text=name.title())
                image.save(os.path.join(full_path, f'{name}-icon.png'), quality=85)

if __name__ == '__main__':
    generate_placeholders()
    print("Placeholder images generated successfully!")
