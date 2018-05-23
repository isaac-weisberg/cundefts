BUILDDIR=./dist/

default: build

build:
	tsc
clean:
	-rm -rf $(BUILDDIR)*