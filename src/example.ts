let Example: ScriptDescription = {};

namespace example {
	const PATH = ['Tab name', 'Nav section', 'Block name'];

	let screenSize = Renderer.GetScreenSize();

	/*
		Работа с меню
	*/
	let ENABLE = Menu.AddToggle(PATH, 'Enable', false)
		.SetNameLocale('ru', 'Включить')
		.SetTip('Подсказка под опцией', 'ru')
		.SetTip2('Подсказка при наведении', 'ru')
		.MergeWithNext()
		.OnChange(state => {
			console.log(`Toggle changed: new (${state.newValue}) | old (${state.oldValue})`);
			ENABLE = state.newValue;
		})
		.GetValue();

	const items = ['item_blink', 'item_tango', 'item_branches', 'item_rapier'];
	let multiSelect = Menu.AddMultiSelect(PATH, 'MultiSelect', items.map(itemName => GetImagesPath(itemName)), [true, true, false, false], 10)
		.OnChange(state => multiSelect = state.newValue)
		.GetValue();

	/*
		Callbacks
	*/
	Example.OnScriptLoad = () => {
		console.log('My first script loaded :)');
	};
	Example.OnScriptUnload = () => {
		console.log('My first script unloaded :(');
	};
	Example.OnScreenSizeChange = (width, height) => {
		screenSize = [width, height];
	};

	Example.OnUpdate = () => {
		/* Ало сложная логика? Да, да, OnUpdate */

		if(!ENABLE)
			return;

		if(Engine.OnceAtByKey(10, 'Example.OnUpdate.Timer')) {
			console.warn('Это сообщение пишется раз в 10 игровых секунд');
		}
		if(Engine.OnceAtByKey(10, 'Example.OnUpdate.TimerReal', true)) {
			console.warn('А это раз в 10 реальных секунд');
		}
	};

	Example.OnDraw = () => {
		/* Не надо тут сложную логику, пожалейте кадры */

		if(!ENABLE) {
			return;
		}

		const SIZE = 64;
		const [x, y] = [screenSize[0] / 2 - SIZE, screenSize[1] / 4 - SIZE];
		const ROUNDING = 8;
		const CORNERS = Enum.RoundCorners.All;

		Renderer.SetDrawColor(Color.YELLOW);
		Renderer.DrawFilledRect(x, y, SIZE, SIZE, ROUNDING, CORNERS);
		Renderer.SetDrawColor(Color.RED);
		Renderer.DrawFilledRect(x + SIZE, y, SIZE, SIZE, ROUNDING, CORNERS);

		Renderer.SetDrawColor(Color.RED.Clone().SetB(255).SetA(150));
		Renderer.DrawFilledRect(x, y + SIZE, SIZE, SIZE, ROUNDING, CORNERS);
		Renderer.SetDrawColor(Color.YELLOW.Clone().SetA(100));
		Renderer.DrawFilledRect(x + SIZE, y + SIZE, SIZE, SIZE, ROUNDING, CORNERS);
	};

	// utils
	function GetImagesPath(name: string, full?) {
		if(!name)
			return;

		if(name.startsWith('item_')) {
			return `panorama/images/items/${name.slice(5)}_png.vtex_c`;
		} else if(name.startsWith('npc_dota_hero')) {
			if(full) {
				return `panorama/images/heroes/${name}_png.vtex_c`;
			} else {
				return `panorama/images/heroes/icons/${name}_png.vtex_c`;
			}
		} else if(name.startsWith('npc_dota_neutral')) {
			return `panorama/images/heroes/${name}_png.vtex_c`;
		} else if(name.startsWith('panorama/') || name.startsWith('~/')) {
			return name;
		} else {
			return `panorama/images/spellicons/${name}_png.vtex_c`;
		}
	}

	RegisterScript(Example, 'My first script');
}