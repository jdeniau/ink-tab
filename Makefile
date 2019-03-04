.PHONY: demo clean install

demo: clean install media/demo.svg media/demo-column.svg

install: node_modules

node_modules: yarn.lock
	yarn install

clean:
	rm demo/ink-tab-demo-row.json || true
	rm demo/ink-tab-demo-column.json || true

media/demo.svg: demo/ink-tab-demo-row.json
	cat demo/ink-tab-demo-row.json | yarn svg-term --window --no-cursor --width 70 --height 15 --out media/demo.svg

media/demo-column.svg: demo/ink-tab-demo-column.json
	cat demo/ink-tab-demo-column.json | yarn svg-term --window --no-cursor --width 70 --height 15 --out media/demo-column.svg

demo/ink-tab-demo-row.json: clean
	asciinema rec demo/ink-tab-demo-row.json -c 'yarn demo' 

demo/ink-tab-demo-column.json: clean
	asciinema rec demo/ink-tab-demo-column.json -c 'yarn demo --column' 
