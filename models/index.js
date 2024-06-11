const Comment = require('./Comment.js');
const Company = require('./Company.js');
const Event = require('./Event.js');
const Forum = require('./Forum.js');
const Post = require('./Post.js');
const Tag = require('./Tag.js');
const CompanyTag = require('./CompanyTag.js')
const EventTag = require('./EventTag.js')
const User = require('./User.js');

Company.hasMany(User, {
    foreignKey: 'company_id',
    onDelete: 'CASCADE'
});

User.belongsTo(Company, {
    foreignKey: 'company_id'
})

Tag.belongsToMany(Company, {
    through: 'CompanyTag',
    foreignKey: 'company_id'
});

Tag.belongsToMany(Event, {
    through: 'EventTag',
    foreignKey: 'event_id'
})

Event.belongsTo(Company, {
    foreignKey: 'company_id',
    onDelete: 'CASCADE'
})

Forum.hasMany(User, {
    foreignKey: 'user_id'
})

Post.belongsTo(Forum, {
    foreignKey: 'forum_id',
    onDelete: 'CASCADE'
})

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
})

Comment.hasOne(User, {
    foreignKey: 'user_id',
    // onDelete: 'CASCADE'
})


module.exports = {
    Comment,
    Company,
    Event,
    Forum,
    Post,
    Tag,
    User,
    CompanyTag,
    EventTag,
};