import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
     name="thoaded",  
     version="0.1.0",
     py_modules=["thoaded"],
     author="Walber Antonio Ramos Beltrame",
     author_email="walber.beltrame@gmail.com",
     description="Library for simple and fast design pattern that extends model, view and controller for asynchronous events in supported modern programming languages.",
     long_description=long_description,
     long_description_content_type="text/markdown",
     url="https://thoaded.walberbeltrame.com/",
     license="MIT",
     packages=setuptools.find_packages(),
     classifiers=[
         "Programming Language :: Python :: 3",
         "License :: OSI Approved :: MIT License",
         "Operating System :: OS Independent",
     ],
     python_requires=">=3.6",
 )