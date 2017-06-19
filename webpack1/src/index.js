import _ from 'lodash';
import moment from 'moment';


function filterBeforeItems(items){
	return _.filter(items, (i) => moment('2010-10-20').isBefore(item.date))
}
