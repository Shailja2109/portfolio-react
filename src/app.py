import cv2
import numpy as np

# Load the image
image = cv2.imread('./pngtree-stunning-3d-render-glimpse-the-planets-through-a-vast-spaceship-window-image_13556822.png')

# Convert the image to HSV color space
hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)

# Define the color range for the blue oval (adjust values if needed)
lower_blue = np.array([90, 100, 100])
upper_blue = np.array([130, 255, 255])

# Create a mask to isolate the blue oval
mask = cv2.inRange(hsv, lower_blue, upper_blue)

# Find contours in the mask
contours, _ = cv2.findContours(mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

# Find the largest contour (assuming the oval is the largest object)
largest_contour = max(contours, key=cv2.contourArea)

# Approximate the contour with an ellipse
ellipse = cv2.fitEllipse(largest_contour)

# Create an empty image with the same size and type as the original
output = np.zeros_like(image)

# Draw the ellipse on the output image
cv2.ellipse(output, ellipse, (255, 0, 0), 2)

# Apply bitwise masking to isolate the region inside the ellipse
output = cv2.bitwise_and(image, image, mask=output)

# Show the original and output images
cv2.imshow('Original Image', image)
cv2.imshow('Output Image', output)

# Wait for a key press to exit
cv2.waitKey(0)
cv2.destroyAllWindows()
